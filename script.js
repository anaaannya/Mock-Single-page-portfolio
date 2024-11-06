function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");
    if (recommendation.value.trim() !== "") {
        showPopup(true);
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;
        document.getElementById("all_recommendations").appendChild(element);
        recommendation.value = "";
    }
}

function showPopup(visible) {
    const popup = document.getElementById('popup');
    popup.style.visibility = visible ? 'visible' : 'hidden';
}
