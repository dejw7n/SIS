import { SharedModule } from "../../../shared/shared.module";
import { FilesModule } from "../../../core/components/files/files.module";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzFormModule } from "ng-zorro-antd/form";
import { PostFilterPipe } from "../../pipes/post-filter/post-filter.pipe";
import { OverlayModule } from "../../../core/components/overlay/overlay.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { MatMenuModule } from "@angular/material/menu";
import { EditPostComponent } from "./components/edit-post/edit-post.component";
import { FormsModule } from "@angular/forms";
import { EditorModule } from "@tinymce/tinymce-angular";
import { MatDialogModule } from "@angular/material/dialog";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzIconModule } from "ng-zorro-antd/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { PostHistoryComponent } from "./components/post-history/post-history.component";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";

@NgModule({
	declarations: [DashboardComponent, PostFilterPipe, AddPostComponent, EditPostComponent, PostHistoryComponent],
	imports: [SharedModule, FilesModule, EditorModule, CommonModule, OverlayModule, NzEmptyModule, NzDrawerModule, FormsModule, NzFormModule, NzInputModule, NzCheckboxModule, NzSelectModule, MatMenuModule, NzDatePickerModule, MatDialogModule, NzIconModule, EditorModule, MatSnackBarModule],
})
export class DashboardModule {}
