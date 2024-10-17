function setup_square()
    {
        let allFloatSquareLeft = document.querySelector("#all-float-square #left");
        let allFloatSquareRight = document.querySelector("#all-float-square #right");
        allFloatSquareLeft.innerHTML = "";
        allFloatSquareRight.innerHTML = "";
        let htmlPage = document.querySelector("body");
    const MAX_HEIGHT = window.innerHeight;

    let is_green = false;
    for (let i=0; i<10; i++)
    {
        const NEW_ITEM = document.createElement("div");
        NEW_ITEM.classList.add("float-square");
        NEW_ITEM.style.top = Math.random() * MAX_HEIGHT + "px";
        NEW_ITEM.style.left = Math.random() * (allFloatSquareLeft.clientWidth) + 0 + "px";

        if (is_green)
        {
            is_green = false;
            NEW_ITEM.style.backgroundColor = "#2b3137";
            NEW_ITEM.style.boxShadow = "0px 0px 20px #2b3137";
        } else {
            is_green = true;
        }

        NEW_ITEM.style.animationDuration = Math.random() * (5 - 3) + 3 + "s";
        

        allFloatSquareLeft.appendChild(NEW_ITEM);
    }

    for (let i=0; i<10; i++)
    {
        const NEW_ITEM = document.createElement("div");
        NEW_ITEM.classList.add("float-square");
        console.log()
        NEW_ITEM.style.top = Math.random() * MAX_HEIGHT + "px";
        NEW_ITEM.style.left = Math.random() * (allFloatSquareLeft.clientWidth) + allFloatSquareRight.getClientRects()[0].x-400 + "px";

        if (is_green)
        {
            is_green = false;
            NEW_ITEM.style.backgroundColor = "#2b3137";
            NEW_ITEM.style.boxShadow = "0px 0px 20px #2b3137";
        } else {
            is_green = true;
        }
        
        NEW_ITEM.style.animationDuration = Math.random() * (5 - 3) + 3 + "s";

        allFloatSquareLeft.appendChild(NEW_ITEM);
    }
    }

    setup_square();
    window.addEventListener("resize", setup_square);