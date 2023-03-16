import { useState } from "react"

function Login() {

  function cadastrarUsuario(e){
    e.preventDefault()
    console.log(email, password)
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  return (
    <div>
      <div class="container d-flex justify-content-center">
        <div class="col-6">
          <form onSubmit={cadastrarUsuario}>


            <div class="form-group row">
              <label for="email" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="email" name="email" placeholder="Email" onChange={(e => setEmail(e.target.value))}/>
              </div>
            </div>

            <div class="form-group row">
              <label for="password" class="col-sm-2 col-form-label">Senha</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="password" name="password" placeholder="Senha" onChange={(e => setPassword(e.target.value))} />
              </div>
            </div>



            <button type="submit" class="btn btn-primary">Logar</button>
          </form>
        </div>

      </div>
    </div>
  )
}


export default Login