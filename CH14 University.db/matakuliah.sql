CREATE TABLE Mata_Kuliah (
    Id_MataKuliah varchar(15) not null primary key,
    Nama varchar(15) not null,
    SKS int(5),
    Nip varchar(15) not null, foreign key(Nip) references Dosen(Nip)
);

INSERT INTO Mata_Kuliah 
VALUES ('MK01','Ushul Fiqih',3,'X001'),('MK02','Aqidah',3,'X002'),('MK03','Fiqih',3,'X003');