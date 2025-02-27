import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NzEmptyModule } from "ng-zorro-antd/empty";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { cs_CZ, NZ_I18N } from "ng-zorro-antd/i18n";
import { CommonModule, DatePipe, registerLocaleData } from "@angular/common";
import cs from "@angular/common/locales/cs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ErrorsModule } from "./core/components/errors/errors.module";
import { OverlayModule } from "./core/components/overlay/overlay.module";
import { AuthGuard } from "./core/guards/auth/auth.guard";
import { TokenInterceptor } from "./core/interceptors/token/token.interceptor";
import { MatIconModule } from "@angular/material/icon";
import { FooterComponent } from "./core/components/footer/footer.component";
import { JwtModule } from "@auth0/angular-jwt";
import { StaffModule } from "./staff/staff.module";
import { AuthModule } from "./auth/auth.module";

registerLocaleData(cs);

@NgModule({
	declarations: [AppComponent, FooterComponent],
	imports: [
		JwtModule.forRoot({
			config: {
				tokenGetter: () => localStorage.getItem("access_token"),
			},
		}),
		StaffModule,
		AuthModule,
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		ErrorsModule,
		OverlayModule,
		NzEmptyModule,
		MatIconModule,
	],
	exports: [],
	providers: [
		DatePipe,
		{ provide: NZ_I18N, useValue: cs_CZ },
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
