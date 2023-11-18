import { Component, ViewChild, ElementRef } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  message: string = ''; // Variable para almacenar el mensaje
  generatedHMAC: string = ''; // Variable para almacenar el HMAC generado


  generateHMAC(message: string, key: string): string {
    const hmac = CryptoJS.HmacSHA256(message, key);
    return hmac.toString(CryptoJS.enc.Hex);
  }


  

  onGenerateHMAC() {
    const secretKey = 'TuClaveSecreta';

    if (this.message.trim() !== '') { // Verifica si se ha ingresado un mensaje
      this.generatedHMAC = this.generateHMAC(this.message, secretKey);
      console.log('HMAC:', this.generatedHMAC);
      // Puedes hacer lo que quieras con el HMAC generado, como enviarlo a algún servicio o mostrarlo en la consola, etc.
    } else {
      console.log('Ingresa un mensaje para generar el HMAC');
    }
  }
  
  @ViewChild('additionalInfo', { read: ElementRef }) additionalInfo?: ElementRef;
  imageSrc: string = 'https://w.wallhaven.cc/full/vg/wallhaven-vgedr5.jpg'; 
  // Rutas de las dos imágenes disponibles
  firstImage: string = 'https://w.wallhaven.cc/full/vg/wallhaven-vgedr5.jpg';
  secondImage: string = 'https://w.wallhaven.cc/full/3k/wallhaven-3kgwpd.jpg';
  
  imageClicked() {
    console.log('Image clicked!'); // Verificar si la función se ejecuta al hacer clic
    this.imageSrc = this.imageSrc === this.firstImage ? this.secondImage : this.firstImage;
  }

  additionalInfoVisible: boolean = false;

  toggleAdditionalInfo() {
    if (this.additionalInfo) {
      this.additionalInfoVisible = !this.additionalInfoVisible;
      const nativeElement: HTMLElement | null = this.additionalInfo.nativeElement;
      if (nativeElement) {
        nativeElement.style.display = this.additionalInfoVisible ? 'block' : 'none';
      }
    }
  }
}
