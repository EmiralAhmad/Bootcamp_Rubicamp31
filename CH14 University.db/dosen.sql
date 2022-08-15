CREATE TABLE Dosen (
    Nip varchar(15) not null primary key,
    Nama varchar(30) not null,
    Id_MataKuliah varchar(15) not null, foreign key (Id_MataKuliah) references Mata_Kuliah(Id_MataKuliah)
);

INSERT INTO Dosen
VALUES ('X001','Dudung Jamaludin','MK01'),('X002','Abdul Aziz','MK02'),('X003','Muhammad Tazakka','MK03');