import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutes } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './components/loader/loader.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule, LoaderModule, RouterModule.forRoot(AppRoutes), HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
