const tasks = [];

// פונקציה להוספת משימה
function addTask(name) {
    tasks.push(name);
    console.log(`נוספה משימה חדשה: ${name}`);
}

addTask("ללמוד גיט");
addTask("להכין קפה");

console.log("רשימת המשימות המעודכנת:", tasks);