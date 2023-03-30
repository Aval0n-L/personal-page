export interface Profile {
    info?:      BaseInfo;
    home?:      Home;
    skills?:    Skills;
    experince?: Experience;
    about?:     About;
}

export interface BaseInfo {
    name?:      string;
    photo?:     string;
    position?:  string;
    mail?:      string;
    linkedIn?:  string;
}

export interface Home {
    about?:     string;
    location?:  string;
}

export interface Skills {
    backend?:   string;
    frontend?:  string;
    charcters?: string;
}

export interface Experience {
    education?: Education;
    work?:      Work;
}

export interface BaseQualification {
    name?:      string;
    position?:  string;
    years?:     string;
    photo?:     string;
    logo?:      string;
}
export interface Education extends BaseQualification{
}
export interface Work extends BaseQualification {
    skills?:    string;
}

export interface About {
    little?:     Card;
    about?:     Card;
    me?:        Card;
}
export interface Card {
    title?:         string;
    description?:   string;
}