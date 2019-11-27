import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPage } from './success.page';

import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SuccessPage', () => {
  let component: SuccessPage;
  let fixture: ComponentFixture<SuccessPage>;


  const storageIonicMock: any = {
    get: () => new Promise<any>((resolve, reject) => resolve('test')),
  };

  const FirebaseServiceMock: any = {
    retrieveData: () => new Promise<any>((resolve, reject) => resolve('test')),
  };

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: Storage,
          useValue: storageIonicMock
        },
        { provide: AngularFireStorage, useValue: FirestoreStub },
        { provide: FirebaseService, useValue: FirebaseServiceMock },
        { provide: AngularFirestore, useValue: FirestoreStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
