let newDate = new Date();
    const setTime = function(){   
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();
        minutes = zero(minutes);
        function zero(x) {
            if (x < 10) {
                x = '0' + x;
            } return x;
        }
        document.getElementById('hour').textContent = hours+':'+minutes;
    }
    setInterval(setTime,1000)

    const setDate = () => {
        let day = newDate.getDay();
        const weekDays = ["Domingo","Segunda","terça", "Quarta", "Quinta", "Sexta", "Sábado"];

        for (let i = 0; i < weekDays.length; i++) {
            if(day == i) {
                dayName = weekDays[i];
            }      
        }
        
        let month = newDate.getMonth();
        const monthsName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let monthName;

        for (let i = 0; i < monthsName.length; i++) {
            if(month == i) {
                monthName = monthsName[i];
            }      
        }

        let date = newDate.getDate();

        document.getElementById('date').textContent = `${dayName}, ${date} ${monthName}`;
    }
    setDate();