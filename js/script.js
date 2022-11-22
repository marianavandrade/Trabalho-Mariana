function criaTarefa() {
    let nomeTarefa = document.getElementById('inputNovaTarefa').value;
    let li = document.createElement('li');

    let btnCheck = document.createElement('button');
    btnCheck.classList.add('btnCheck');

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = nomeTarefa;
    
    let div = document.createElement('div');
    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnExcluir');
    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnEditar'); 

    li.appendChild(btnCheck);
    li.appendChild(span);
    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);
    li.appendChild(div);

    document.getElementById('listaTarefas').appendChild(li);
    document.getElementById('inputNovaTarefa').value = "";

    btnExcluir.addEventListener('click', function () {
        li.remove()
    })

    btnCheck.addEventListener('click', function () {
        if (btnCheck.classList.length == 2) {
            btnCheck.classList.remove('btnChecked');
            span.style.textDecoration = 'none';
            span.style.color = '#ffffff'
        } else {
            btnCheck.classList.add('btnChecked');
            span.style.textDecoration = 'line-through';
            span.style.color = '#ffffffad'
        }
    })

    btnEditar.addEventListener('click', function () {
        if (btnEditar.classList.length == 2) {
            let tarefaNova = document.getElementById('tarefaNova').value;
            span.innerHTML = tarefaNova;
            btnEditar.classList.remove('salvar');
        } else {
            span.innerHTML = "<input class='edit' id='tarefaNova'>"
            btnEditar.classList.add('salvar');
        }
    })
}