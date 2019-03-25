#!/bin/bash

# help
help () {
	cat <<EOD && exit 1
$(printf "\e[1m")Usage:$(printf "\e[0m")
  ./awk_sed.sh file

$(printf "\e[1m")Options:$(printf "\e[0m")
  -h   Show this help.

$(printf "\e[1m")Examples:$(printf "\e[0m")
  ./awk_sed.sh awk_sed.csv

  Converts csv dummpy data into sql insert ready statements.

EOD
	exit 2
}

# exit and print help if no enough arguments are supplied
[[ $# -lt 1 ]] && help

file=$1

sed 's/[^,]*,//' $file > parsed.csv # remove the id column from original csv file
echo "COPY users (first_name,last_name,email,gender,country) FROM stdin;" > awk_sed.sql
awk -F, '{ print " ''"$1"'' ''"$2"'' ''"$3"'' ''"$4"'' ''"$5"'' ''"$6"'' "}' parsed.csv >> awk_sed.sql
echo "\\." >> awk_sed.sql

cat awk_sed.sql