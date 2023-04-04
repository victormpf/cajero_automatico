//variables globales

var posisionCliente = -1
var saldoCliente = -1
var monto = 0;
var montoMax = 990;
var montoMin = 10;


//Arreglo de objetos
var cuentas = [
  { nombre: "Mali", saldo: 200, password: "HolaComoEstas" },
  { nombre: "Gera", saldo: 100, password: "1234" },
  { nombre: "Maui", saldo: 67, password: "admin1234" },
];


function iniciarSesion() {
  let initSesion = document.querySelector("#informacion");

  initSesion.innerHTML = `
        
        <form action="">
        <label for="usuario">Ingresa tu usuario</label>
        <input type="text" name="usuario" id="userInput">
        <label for="password">Ingresa tu password</label>
        <input type="password" name="password" id="passwordInput">
        <button onclick="login()">Iniciar sesion</button>
        </form>

        `;
}

window.onload = iniciarSesion;

function sesionIniciada() {
  let initSesion = document.querySelector("#informacion");
  initSesion.innerHTML = `
    
    <button onclick="consutaSaldo()"> Consultar saldo</button>
    <button onclick="depositar()">Hacer deposito</button>
    <button onclick="retirar()">Retirar efectivo</button>
    <button onclick="iniciarSesion()">Salir</button>
    `;
}

function depositar() {
  let initSesion = document.querySelector("#informacion");
  initSesion.innerHTML = 
  `
  <div>
  <label for="cantidadDepo">Ingresa la cantidad</label>
  <input type="text" name="cantidadDepo" id="cantidadDeposito">
  <button onclick="realizarDep()">Depositar</button>
  <button onclick="sesionIniciada()">Salir</button>
  </div>

  `
  
}

function retirar(){
  let initSesion = document.querySelector("#informacion");
  initSesion.innerHTML = 
  `
  <div> 
  <label for="cantidadReti">Ingresa la cantidad</label>
  <input type="text" name="cantidadDepo" id="cantidadRetiro">
  <button onclick="retirarDinero()">Retirar</button>
  <button onclick="sesionIniciada()">Salir</button>
  </div>

  `

}

function login() {
  let initSesion = document.querySelector("#informacion");
  let user = document.querySelector("#userInput").value;
  let password = document.querySelector("#passwordInput").value;
  

// Validamos a los usuarios que estan en el Arreglo
  for (let i = 0; i < cuentas.length; i++) {
          if (cuentas[i].nombre === user && cuentas[i].password === password) {
              sesionIniciada();
              posisionCliente = i
                return 
        
    }else{
        
        initSesion.innerHTML = 
        `
      <div>
      <p style="color:red; font-size: 30px;"> <strong>Lo siento el usuario y/o contraseña es incorrecto</strong></p>
      <button onclick="iniciarSesion()  "> Regresar </button>
      </div>
      
    `
    }      
  }
  
}


// vamos a consultar saldo
function consutaSaldo() {
  let initSesion = document.querySelector("#informacion");

  for (let i = 0; i < cuentas.length; i++) {
            saldo = cuentas[i].saldo;


                if (posisionCliente === i ) {
                  initSesion.innerHTML =  
                  `
                  <div>
                  <p style="color:green; font-size: 30px;"><strong>Tu saldo es de ${cuentas[i].saldo}</strong></p>
                  <button onclick="sesionIniciada()"> Regresar al menú</button>
                  <button onclick="iniciarSesion()"> Salir </button>
                  </div>
                `
                break
      }
  }    
}




  function realizarDep() { 
    let initSesion = document.querySelector("#informacion");
      let sum = 0;
        monto = document.querySelector("#cantidadDeposito").value
        for (let i = 0; i < cuentas.length; i++) {
      if(cuentas[i].saldo + parseFloat(monto) <= montoMax){
          if ( posisionCliente === i && monto != ""){
            console.log(`entre aqui ${monto} ${cuentas[i].saldo}` );

              cuentas[i].saldo += parseFloat(monto);
              
            initSesion.innerHTML =  
            `
            <div>
            <p style="color:green; font-size: 30px;"><strong>Agregaste ${monto} a tu cuenta, tu nuevo saldo es ${cuentas[i].saldo}</strong></p>
            <button onclick="sesionIniciada()"> Regresar al menú</button>
            <button onclick="iniciarSesion()"> Salir </button>
            </div>
          `
          break
          }
      }
      else{
        initSesion.innerHTML =  
        `
        <div>
        <p style="color:red; font-size: 30px;"><strong>No puedes tener mas de 990 pesos en tu cuenta</strong></p>
        <button onclick="sesionIniciada()"> Regresar al menú</button>
        <button onclick="iniciarSesion()"> Salir </button>
        </div>
        `}
        }         
      }
  
  function retirarDinero() {
    let initSesion = document.querySelector("#informacion");
let resta = 0;
    montoRetiro = document.querySelector("#cantidadRetiro").value 
    for (let i = 0; i < cuentas.length; i++) {
      if( cuentas[i].saldo - parseFloat(montoRetiro) >= montoMin ){
        if ( posisionCliente === i && montoRetiro != "" ){
          
      cuentas[i].saldo -= parseFloat(montoRetiro);
      initSesion.innerHTML = 
      `
    <div>
    <p style="color:green; font-size: 30px;"><strong>Retiraste ${montoRetiro} de tu cuenta, tu saldo es de ${cuentas[i].saldo}</strong></p>
    <button onclick="sesionIniciada()"> Regresar al menú</button>
    <button onclick="iniciarSesion()"> Salir </button>
    </div>
    
  `
      break
      }
      
      
    }
    else{
      initSesion.innerHTML = 
    `
  <div>
  <p style="color:red; font-size: 30px;"><strong>No puedes tener menos de 10 pesos en tu cuenta</strong></p>
  <button onclick="sesionIniciada()"> Regresar al menú</button>
  <button onclick="iniciarSesion()"> Salir </button>
  </div>
  `
    }
  }
}