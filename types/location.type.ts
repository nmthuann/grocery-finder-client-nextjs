interface Wards {
    Id: string;
    Name: string;
    Level: string;
}

interface Districts{
    Id: string;
    Name: string;
    Wards: Wards [];
}


interface Location {
    Id: string;
    Name: string; // -> id -> Districts[...]-> combobox
    Districts: Districts [];
}