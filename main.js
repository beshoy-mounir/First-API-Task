let input = document.getElementById("inputText");

btn.addEventListener("click", () => {
    if (isNaN(input.value) || input.value == "") {
        h1.innerHTML = `Invaild Input`;
    } else if (
        (!isNaN(input.value) && input.value > 99) ||
        input.value % 1 !== 0
    ) {
        h1.innerHTML = `The Range is Between 0 to 99 "Integer"`;
    } else {
        h1.innerHTML = ``;
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((t) => {
                let arr = t.data.memes;
                let targetobj = arr[input.value];
                console.log(arr[input.value]);
                write.innerHTML = `<h2>${targetobj.name}</h2>
                <img src="${targetobj.url}" alt="" width="${targetobj.width}" height="${targetobj.height}">`;
            });
    }
});
