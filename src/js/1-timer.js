import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";






let userSelectedDate;
flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
  },
} );




console.log(userSelectedDate);