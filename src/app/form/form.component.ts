import { Component, OnInit } from '@angular/core';
import { LinkService } from "../services/link.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  code!: string;
  user!: any;

  constructor(private linkService: LinkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
    this.linkService.get(this.code).subscribe({
      next: value => { this.user = value[0].user; }
    });
  }

}
