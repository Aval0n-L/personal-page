import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { BaseInfo, Home, Profile, Skills } from 'src/app/model/profile.interface';

@Injectable()
export class ProfileService {

    private pathUrl = '/assets/data/default.json';
    constructor(private http: HttpClient) {}

    public getInfo = () : Observable<BaseInfo> =>
        this.http
            .get<Profile>(this.pathUrl)
            .pipe(map(profile => profile.info || { name: '', photo: '', position: '', mail: '', linkedIn: '' }));

    public getHome = () : Observable<Home> =>
        this.http
            .get<Profile>(this.pathUrl)
            .pipe(map(profile => profile.home || { about: '', location: '' }));

    public getSkills = () : Observable<Skills> =>
        this.http
            .get<Profile>(this.pathUrl)
            .pipe(map(profile => profile.skills || { backend: '', frontend: '', charcters: '' }));
}
