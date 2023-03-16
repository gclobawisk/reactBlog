import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://crawler-app.onrender.com/links')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div>

      <div class="container py-4 py-xl-5">
        <div class="row mb-5">
          <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2>BLOG CONSUMINDO API</h2>
            <p class="w-lg-50">Este blog foi desenvolvido com React e está consumindo uma api criada em Python/Flask</p>
          </div>
        </div>


          <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            
            {data.map(item => (
        
            <div class="col">
              <div class="card"><img class="card-img-top w-100 d-block fit-cover" src="https://idocode.com.br/wp-content/uploads/2019/09/tecnologia.jpg"/>
                <div class="card-body p-4">
                  <p class="text-primary card-text mb-0">Artigo</p>
                  <h4 class="card-title">{item.li_titulo}</h4>
                  <p class="card-text"><a href={item.li_url} target="_black">{item.li_url}</a></p>
                  <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://gclobawisk.github.io/portfolio/assets/img/profile-img.jpg"/>
                    <div>
                      <p class="fw-bold mb-0"> Administrador</p>
                      <p class="text-muted mb-0"> {item.li_data}</p>
                    </div>
                  </div>
                </div>
              </div><br/>
            </div>

          ))}
          
          </div>
      </div>
    </div>
  );
}




export default Home

