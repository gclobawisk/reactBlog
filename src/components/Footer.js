function Footer(){
    return (
        <footer>
            <div class="row">
                <div class="col-sm-6 col-md-4 footer-navigation">
                    <h3><a href="#">React<span>Blog </span></a></h3>
                    <p class="links"><a href="./">Início</a><strong> · </strong><a href="contact">Contato</a><strong> · </strong><a href="company">Sobre</a><strong> · </strong></p>
                    <p class="company-name">ReactBlog © 2023 </p>
                </div>
                <div class="col-sm-6 col-md-4 footer-contacts">
                    <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                        <p><span class="new-line-span">Rua Revolução, 21</span> RJ, Brasil</p>
                    </div>
                    <div><i class="fa fa-phone footer-contacts-icon"></i>
                        <p class="footer-center-info email text-start"> 55 (21) 99661-1558</p>
                    </div>
                    <div><i class="fa fa-envelope footer-contacts-icon"></i>
                        <p> <a href="#" target="_blank">gabriel.clobawisk@hotmail.com</a></p>
                    </div>
                </div>
                <div class="col-md-4 footer-about">
                    <h4>Sobre o Blog</h4>
                    <p> Esta aplicação foi desenvolvida em react que consome uma api de um Crawler desenvolvido com Flask/Python</p>
                    <div class="social-links social-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer