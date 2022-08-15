CREATE TABLE Mahasiswa (
    Nim varchar(15) not null primary key,
    Nama varchar(30) not null,
    Jurusan varchar(15),
    Alamat text,
    ID_Jurusan varchar (15) not null, foreign key (ID_Jurusan) references Jurusan(ID_Jurusan)
);

INSERT INTO Mahasiswa 
VALUES ('1201A','Emiral Ahmad','Akuntansi','Joglo, Cianjur Jawa Barat','12011'),('1201B','Kahfi','Manajemen','Tanah Baru, Bogor Jawa Barat','12012'),('1201C','Fachri Naufal','Ekonomi','Condet Jakarta Timur','12013'),('1201D','Muhaedy','Bisnis Digital','Cinambo, Bandung Jawa Barat','12014');