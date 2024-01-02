  // Retrieve attendance records from local storage
  const attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

  // Display initial attendance records
  updateAttendanceRecords();

  function updateAttendanceRecords() {
      const attendanceList = document.getElementById("attendanceRecords");
      attendanceList.innerHTML = "";

      attendanceRecords.forEach(entry => {
          const listItem = document.createElement("li");
          listItem.textContent = `Student Name: ${entry.studentName} | ID: ${entry.studentId} | Class: ${entry.classSelection} | Section: ${entry.sectionSelection} | Limit: ${entry.limit} | Status: ${entry.status}`;
          attendanceList.appendChild(listItem);
      });
  }

  function markAttendance() {
    const studentName = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const classSelection = document.getElementById("classSelection").value;
    const sectionSelection = document.getElementById("sectionSelection").value;
    const limit = document.getElementById("limit").value;
    const present = document.getElementById("present").checked;
    const absent = document.getElementById("absent").checked;
    const halfDay = document.getElementById("halfDay").checked;

    if (studentName && studentId && classSelection && sectionSelection && limit) {
        const entry = {
            studentName,
            studentId,
            classSelection,
            sectionSelection,
            limit,
            status: getStatus(present, absent, halfDay)
        };
  
          const isAlreadyMarked = attendanceRecords.some(record => isEqualExceptStatus(record, entry));
          const attendanceCountForLimit = attendanceRecords.filter(record => record.limit === limit).length;
  
          if (!isAlreadyMarked) {
              if (attendanceCountForLimit < limit) {
                  attendanceRecords.push(entry);
                  localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
                  updateAttendanceRecords();
                  openPopup(`Attendance marked for Student Name: ${studentName}`);
              } else {
                  openPopup(`Attendance limit reached for Limit: ${limit}`);
              }
          } else {
              openPopup(`Attendance for Student Name: ${studentName} already marked`);
          }
      }
  }
  
  
  function isAttendanceAlreadyMarked(newEntry) {
      return attendanceRecords.some(record => isEqualExceptStatus(record, newEntry));
  }
  
  function isEqualExceptStatus(obj1, obj2) {
      // Compare all properties except the 'status' property
      const { status: status1, ...rest1 } = obj1;
      const { status: status2, ...rest2 } = obj2;
  
      return JSON.stringify(rest1) === JSON.stringify(rest2);
  }

  function getStatus(present, absent, halfDay) {
      if (present) {
          return "Present";
      } else if (absent) {
          return "Absent";
      } else if (halfDay) {
          return "Half Day";
      } else {
          return "Not Marked";
      }
  }

  function isEqual(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  function goToAttendanceRecords() {
      window.location.href = "attendance_records.html";
  }