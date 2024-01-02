
const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
let backup = [];

document.addEventListener('DOMContentLoaded', () => {
    updateAttendanceRecords();
});


function updateAttendanceRecords() {
    const attendanceList = document.getElementById("attendanceRecords");
    const attendanceTableBody = document.getElementById("attendanceRecordsBody");
    attendanceList.innerHTML = "";
    attendanceTableBody.innerHTML = "";

    attendanceRecords.forEach(entry => {
        const listItem = document.createElement("li");
        

        const detailsContainer = document.createElement("div");
        

        const studentName = document.createElement("span");
       

        const studentId = document.createElement("span");
        

        const classInfo = document.createElement("span");
        

        const sectionInfo = document.createElement("span");
        

        const limitInfo = document.createElement("span");
       

        const statusInfo = document.createElement("span");
        

        detailsContainer.appendChild(studentName);
        detailsContainer.appendChild(studentId);
        detailsContainer.appendChild(classInfo);
        detailsContainer.appendChild(sectionInfo);
        detailsContainer.appendChild(limitInfo);
        detailsContainer.appendChild(statusInfo);

        listItem.appendChild(detailsContainer);
        attendanceList.appendChild(listItem);

        // Populate the table
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td>${entry.studentName}</td><td>${entry.studentId}</td><td>${entry.classSelection}</td><td>${entry.sectionSelection}</td><td>${entry.limit}</td><td>${entry.status}</td>`;
        attendanceTableBody.appendChild(tableRow);
    });
}
function backupRecords() {
    // Backup the current records
    backup = [...attendanceRecords];
    alert("Attendance records backed up");
}

function recoverRecords() {
    // Check if there is a backup to recover
    if (backup.length === 0) {
        alert("No backup available to recover");
        return;
    }

    // Restore the records from the backup
    localStorage.setItem('attendanceRecords', JSON.stringify(backup));
    attendanceRecords.length = 0;
    attendanceRecords.push(...backup);
    updateAttendanceRecords();

    alert("Attendance records recovered");
}

function clearAttendanceRecords() {
    // Backup the current records
    backup = [...attendanceRecords];

    // Clear the records
    localStorage.removeItem('attendanceRecords');
    attendanceRecords.length = 0;
    updateAttendanceRecords();

    // Display the backup in a new window or tab
  

    backup.forEach(entry => {
        clearWindow.document.write(`<li>${entry.studentName} - ${entry.studentId} - ${entry.classSelection} - ${entry.sectionSelection} - ${entry.limit} - ${entry.status}</li>`);
    });

    clearWindow.document.write('</ul>');
    clearWindow.document.write('</body></html>');
    clearWindow.document.close();
    alert("nothing to clear")
    alert("Attendance records cleared");
   
    }

    

    
