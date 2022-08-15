CREATE TABLE Kelas (
    Nim varchar (15) not null,
    Nip varchar(15) not null, 
    foreign key (Nip) references Dosen(Nip)
    foreign key (Nim) references Mahasiswa(Nim)
);

INSERT INTO Kelas
VALUES ('1201A','X001'),('1201B','X002'),('1201C','X003'),('1201D','X003');