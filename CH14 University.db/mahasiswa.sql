CREATE TABLE Mahasiswa (
    Nim varchar(15) not null primary key,
    Nama varchar(30) not null,
    Jurusan varchar(15),
    Alamat text
);

INSERT INTO Mahasiswa 
VALUES ('1201A','Emiral Ahmad','Akuntansi','Joglo, Cianjur Jawa Barat'),('1201B','Kahfi','Manajemen','Tanah Baru, Bogor Jawa Barat'),('1201C','Fachri Naufal','Ekonomi','Condet Jakarta Timur'),('1201D','Muhaedy','Bisnis Digital','Cinambo, Bandung Jawa Barat');