#!/bin/bash

# help
help () {
	cat <<EOD && exit 1
$(printf "\e[1m")Usage:$(printf "\e[0m")
   ./expr.sh firstNum operation secondNum

$(printf "\e[1m")Options:$(printf "\e[0m")
  -h   Show this help.

$(printf "\e[1m")Examples:$(printf "\e[0m")
  ./expr.sh 23 % 21

  Multiplication will not work with this script.
  Instead do: expr 23 \* 21
  Doesn't play well with floats. :/
EOD
	exit 2
}

# exit and print help if no enough arguments are supplied
[[ $# -lt 3 ]] && help

firstNum=$1
operation=$2
secondNum=$3

expr $firstNum $operation $secondNum