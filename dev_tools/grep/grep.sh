#!/bin/bash

# help
help () {
	cat <<EOD && exit 1
$(printf "\e[1m")Usage:$(printf "\e[0m")
./grep.sh field file

$(printf "\e[1m")Options:$(printf "\e[0m")
  -h   Show this help.

$(printf "\e[1m")Examples:$(printf "\e[0m")
./grep.sh country grep.json

  Gets values for a specified field.

EOD
	exit 2
}

# exit and print help if no enough arguments are supplied
[[ $# -lt 1 ]] && help

field=$1
file=$2

grep $field $file
