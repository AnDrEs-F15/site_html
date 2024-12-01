const getButton = document.getElementById("button-back-project");




const showContentActive = (show, hidden) => {

        document.getElementById(show).className = ""
        document.getElementById(hidden).className += "hidden"
    
    console.log(show);
    console.log(hidden);
}