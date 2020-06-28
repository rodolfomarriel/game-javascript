class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = velocidade
    this.x = width

//  caso inimigos devam aparecer de forma aleatoria     
//     this.delay = delay
//     this.x = width - delay
  }
  
  move() {
    this.x = this.x - this.velocidade
    
    //  caso inimigos devam aparecer de forma aleatoria   
    // if(this.x < -this.largura - this.delay){
    //   this.x = width
    // }
  }
  
  aparece() {
    this.x = width
  }
  
  alteraVelocidade(novaVelocidade) {
    this.velocidade = novaVelocidade
  }
}