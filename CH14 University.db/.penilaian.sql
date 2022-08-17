CREATE TABLE Penilaian (
    Nilai varchar (5) not null,
    Nim varchar (15) not null,
    Id_MataKuliah varchar(15) not null, 
    foreign key (Nim) references Mahasiswa(Nim)
    foreign key (Id_MataKuliah) references Mata_Kuliah(Id_MataKuliah)
);

INSERT INTO Penilaian
VALUES ('A','1201A','MK01'), ('A','1201B','MK02'), ('A','1201C','MK03');