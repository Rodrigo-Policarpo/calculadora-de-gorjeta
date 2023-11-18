function CalculateTip(event) {
    event.preventDefault();
    let Bill = document.getElementById("Bill").value;
    let ServiceQuality = document.getElementById("ServiceQuality").value;
    let PeopleNumber = document.getElementById("PeopleNumber").value;

    if (Bill == "" | ServiceQuality == 0) {
        alert ("É necessário preencher os valores")
        return;
    }

    if (PeopleNumber == "" | PeopleNumber <=1) {
        PeopleNumber = 1;
        document.getElementById("Each").style.display = "none"
    }
    else {
        document.getElementById("Each").style.display = "block"
    }

    let Total = (Bill * ServiceQuality) / PeopleNumber;
    Total = Total.toFixed(2);
    document.getElementById("Tip").innerHTML = Total;
    document.getElementById("TotalTip").style.display = "block";
}

document.getElementById("TotalTip").style.display = "none";
document.getElementById("Each").style.display = "none";

document.getElementById("TipsForm").addEventListener("submit", CalculateTip);