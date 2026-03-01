// 1. הגדרת תאריך הלידה שלך (שנה, חודש - מתחיל מ-0, יום)
const birthDate = new Date(1995, 4, 15); // לדוגמה: 15 למאי 1995
const today = new Date();

// 2. חישוב ההפרש במילישניות
const diffInMs = today - birthDate;

// 3. המרה לימים (מילישניות -> שניות -> דקות -> שעות -> ימים)
const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

console.log("---------------------------------------");
console.log("שלום אלון!");
console.log("האם ידעת שאתה חי כבר " + diffInDays + " ימים?");
console.log("---------------------------------------");