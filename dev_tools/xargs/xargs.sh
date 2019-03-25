#!/bin/bash
echo "About to create"
echo 'folder_one folder_two folder_three folder_four' | xargs mkdir
ls
echo "About to delete"
echo 'folder_one folder_two folder_three folder_four' | xargs rm -rf
ls