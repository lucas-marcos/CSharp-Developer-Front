import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NovoPedidoComponent } from './pedido/novo-pedido/novo-pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultarPedidoComponent } from './pedido/consultar-pedido/consultar-pedido.component';
import { ClienteComponent } from './cadastro/cliente/cliente.component';
import { ProdutoComponent } from './cadastro/produto/produto.component';
import { LoginComponent } from './cadastro/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NovoPedidoComponent,
    ConsultarPedidoComponent,
    ClienteComponent,
    ProdutoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
