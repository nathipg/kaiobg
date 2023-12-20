var v = document.getElementsByClassName('myVideo');
        function classToggle(id) {
            v[id].classList.toggle('hide');
            v[id].classList.toggle('active');
        }

        function closeOtherVideo(id) {
            var c = document.getElementsByClassName('myVideo');
            for(var i=0; i<c.length; i++){
                if(i != id) {
                    v[i].pause();
                    c[i].classList.remove('active')
                    c[i].classList.add('hide')
                }
            }
        }

    document.getElementById('toVideo1').addEventListener('click', function() { classToggle(0),closeOtherVideo(0)});
    document.getElementById('toVideo2').addEventListener('click', function() { classToggle(1),closeOtherVideo(1)});
    document.getElementById('toVideo3').addEventListener('click', function() { classToggle(2),closeOtherVideo(2)});
    document.getElementById('toVideo4').addEventListener('click', function() { classToggle(3),closeOtherVideo(3)});
    
    window.onload = function () {
           var imc= 8
        $("#includedContent").load(imc);
      
    }
        var imc = paciente.querySelector(".imc");

        var himc = peso / (altura * altura);
        
        imc.textContent = himc;