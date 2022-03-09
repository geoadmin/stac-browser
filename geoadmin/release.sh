#!/bin/bash
set -e
set -u

# Colors
RESET=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 6)
BOLD=$(tput bold)

print_help () {
    echo "${BOLD}Release Geoadmin STAC Browser${RESET}"
    echo ""
    echo "$0 [--tag TAG]"
    echo ""
    echo "Tag the repository with geoadmin_VERSION where VERSION is taken either from the --tag option"
    echo "or from the \"version\" field in package.json"
    echo ""
    echo "${BOLD}Options:${RESET}"
    echo "  -t|--tag VALUE    Use a custom tag"
    exit 0
}

# Parsing command line
POSITIONAL=()
while [[ $# -gt 0 ]]; do
  key="$1"

  case $key in
    -h|--help)
      print_help
      ;;
    -t|--tag)
      CUSTOM_TAG="$2"
      shift # past argument
      shift # past value
      ;;
    *)    # unknown option
      POSITIONAL+=("$1") # save it in an array for later
      shift # past argument
      ;;
  esac
done
set -- "${POSITIONAL[@]}" # restore positional parameters

# Check if repo is clean
DIRTY=$(git status --porcelain)
if [[ -n "${DIRTY}" ]]; then
    echo >&2 "${RED}ERROR: repository is dirty"
    echo >&2 ${DIRTY}
    exit 1
fi

if [[ -z "${CUSTOM_TAG:-}" ]]; then
    # Get version from json
    VERSION=$(yq '.version' package.json)
    if [[ "${VERSION}" != v* ]]; then
        # make sure VERSION starts with v
        VERSION=v${VERSION}
    fi
    TAG=geoadmin_${VERSION}
else
    echo "Use custom tag ${CUSTOM_TAG}"
    TAG=geoadmin_${CUSTOM_TAG}
fi

# fetch first the tag to see if they exists
git fetch origin

TAG_EXISTS=$(git --no-pager tag --list | awk '/^'${TAG}'$/ {print $1}')

if [[ -n "${TAG_EXISTS}" ]]; then
    echo >&2 "${RED}ERROR: tag ${TAG} already exists"
    exit 1
fi

git tag ${TAG}
git push origin ${TAG}

echo "TAG ${TAG} created and pushed"