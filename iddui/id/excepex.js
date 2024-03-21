    <script type="text/javascript">
        function updateClock() {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();

            // Ensure minutes are displayed with leading zero if less than 10
            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            // Construct the time string
            var t_str = hours + ":" + minutes + " ";

            // Determine whether it's AM or PM
            if (hours > 11) {
                t_str += "PM";
            } else {
                t_str += "AM";
            }

            // Update the content of the time_span element
            document.getElementById('time_span').innerHTML = t_str;
        }

        // Call the updateClock function every second
        setInterval(updateClock, 1000);
    </script>
    