type User = {
  name: string;
  age?: number;
  gender: string;
};
type MyPick<O, K extends keyof O> = {
  [P in K]: O[P];
};

type a = MyPick<User, 'name' | 'age'>;

type MyOmit<O,K extends keyof O>={
    [P in keyof O as P extends K ? never : P]: O[P];
}
type MyOmit1<O,K extends keyof O>=MyPick<O,Exclude<keyof O,K>>
type b=MyOmit<User, "name"|"gender">;
type b1=MyOmit1<User, "name"|"gender">;

type c = keyof User;
type cc=Exclude<c, "name">
type MyExclude<T,K>= T extends K?never:T;
type ccc=MyExclude<c, "name">
type MyExtract<T,K>=T extends K?T:never;
type cccc=MyExtract<c, "name">


type MyRecord<K extends string | number | symbol,V>={[P in K]:V}
type myRecord=MyRecord<string,number>

type MyPartial<T>={
    [O in keyof T]?:T[O]
}
type myPartial=MyPartial<User>;

type MyRequired<T>={
    [O in keyof T]-?:T[O]
}
type myRequired=MyRequired<User>;

type MyReadonly<T>={
    readonly [O in keyof T]:T[O]
}
type myReadonly=MyReadonly<User>;
