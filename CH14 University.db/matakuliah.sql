CREATE TABLE Mata_Kuliah (
    Id_MataKuliah varchar(15) not null primary key,
    Nama varchar(15) not null,
    SKS int(5),
    Nim varchar(15) not null, foreign key (Nim) references Mahasiswa(Nim)
);

INSERT INTO Mata_Kuliah 
VALUES ('MK01','Ushul Fiqih',3,'1201A'),('MK02','Aqidah',3,'1201B'),('MK03','Fiqih',3,'1201C');