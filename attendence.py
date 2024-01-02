class AttendanceSystem:
    def __init__(self):
        self.attendance_records = []

    def mark_attendance(self, student_id):
        if any(record['student_id'] == student_id for record in self.attendance_records):
            print(f"Attendance for student ID {student_id} already marked")
        else:
            self.attendance_records.append({'student_id': student_id, 'present': True})
            print(f"Attendance marked for student ID {student_id}")

    def display_attendance(self):
        print("Attendance Records:")
        for record in self.attendance_records:
            status = "Present" if record['present'] else "Absent"
            print(f"Student ID: {record['student_id']}, Status: {status}")


def main():
    attendance_system = AttendanceSystem()

    while True:
        print("\nMenu:")
        print("1. Mark Attendance")
        print("2. Display Attendance Records")
        print("3. Exit")

        choice = input("Enter your choice (1/2/3): ")

        if choice == "1":
            student_id = input("Enter Student ID: ")
            attendance_system.mark_attendance(student_id)
        elif choice =="2":
            attendance_system.display_attendance()
        elif choice == "3":
            print("Exiting the attendance system.")
            break
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")


if __name__ == "__main__":
    main()
