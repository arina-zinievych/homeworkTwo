import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEducationComponent } from './skills-education.component';

describe('SkillsEducationComponent', () => {
  let component: SkillsEducationComponent;
  let fixture: ComponentFixture<SkillsEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsEducationComponent]
    });
    fixture = TestBed.createComponent(SkillsEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
