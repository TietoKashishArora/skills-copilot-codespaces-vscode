function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    if (memberSkillsValue == "yes") {
        member.style.display = "block";
    } else {
        member.style.display = "none";
    }
}