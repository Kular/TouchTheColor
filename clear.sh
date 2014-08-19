results=(`find . -name "*~" -print`)
length=${#results[@]}

if [ "${length}" -eq 0 ]; then
    echo "No files found."
    exit 1
else
    for (( i=0; i<${length}; i++ ));
    do
        echo ${results[$i]}
    done
fi

echo "Sure to remove ${length} files above ? (y/n)"
read answer
if [ "$answer" = "y" ]; then 
    find . -name "*~" -print0 | xargs -0 rm
    echo "Deleted!"
else
    echo "Cancelled."
fi
exit 0
