function timer({ parentSelector, endDate, daySelector, hourSelector, minuteSelector, secondSelector }) {

    function getTimeDifference(endDate) {
        const t = Date.parse(endDate) - Date.parse(new Date());

        if (t <= 0) {
            return {
                total: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        const days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor(t / 1000 % 60);

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function setClock(selector, endDate) {
        const timer = document.querySelector(selector),
            days = timer.querySelector(daySelector),
            hours = timer.querySelector(hourSelector),
            minutes = timer.querySelector(minuteSelector),
            seconds = timer.querySelector(secondSelector),
            timeInterval = setInterval(updateClock, 1000);

        if (!timer || !days || !hours || !minutes || !seconds) {
            timer.innerHTML = `Error adding timer:<br/>
            null reference selector(s). Search for solutions:<br/>
            https://github.com/CyxarikHWG/js-timer-module`;
            timer.classList.add("error");
            return;
        }

        updateClock();

        function updateClock() {
            const t = getTimeDifference(endDate);

            days.innerHTML = addZeros(t.days);
            hours.innerHTML = addZeros(t.hours);
            minutes.innerHTML = addZeros(t.minutes);
            seconds.innerHTML = addZeros(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        function addZeros(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            }
            return num;
        }
    }

    setClock(parentSelector, endDate);
}

export default timer;