import styled from "styled-components";


export const Container = styled.div `
 max-width: 1000px;
 margin: 40 px auto;
 padding: 20px;
 background:rgb(255, 255, 255);
 border-radius: 12px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)


`;

export const Title = styled.h2 `
text-align: center;
color: #333
`;

export const SearchInput = styled.input `
width: 100%;
max-width: 400px;
padding: 10px;
margin-bottom:20px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 6px;
`;

export const StyledTable= styled.table `
 width: 100%;
 border-collapse: collapse;

 @media (max-width: 768px) {
 font-size: 14px;
    
}

 @media (max-width: 480px) {
 font-size: 13px;
    
}
`;




export const Th = styled.th`
  background-color: #f0f4f8;
  color: black;
  padding: 12 px;
  text-align: left;
`;


export const Td = styled.td`
  
  padding: 12 px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
 font-size: 14px;
    
}

 @media (max-width: 480px) {
 font-size: 13px;
    
}
`;

export const Tr = styled.th`
  &:hover {
  
  background-color: #f1f1f1
  }
`;

export const NoData = styled.th`
  td {
   text-align: center;
   padding: 20 px;
   color: #999; 
  }
`;

export const StatusBadge = styled.span `
padding: 4px, 10px;
border-radius: 12px;
font-size: 14px;
font-weight: 500;
color: white;
 background-color: ${({ status }) => {
    switch (status) {
      case "New": return "rgb(140, 231, 161)";       // light green
      case "In Progress": return "rgb(94, 221, 243)"; // light cyan
      case "Converted": return "rgb(219, 189, 89)"; // light amber
      default: return " #e2e3e5";         // light grey
    }
  }};
`
