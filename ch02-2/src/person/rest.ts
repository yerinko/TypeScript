let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor ABC building'
};
const {country, city, ...detail} = address;
console.log(detail);

// 실행 결과
// { address 1: 'Gangnam-gu,
// address 2: 'Sinsa-dong 123-456';
// address3: '789 street, 2 Floor ABC building' }