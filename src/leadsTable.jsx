import React, { useState } from "react";
import sampleLeads from "./LeadsData";
import { Container, Title, SearchInput, StyledTable, Th, Td, Tr, NoData, StatusBadge} from "./LeadsTable.styled";

function LeadsTable() {
    const [filterText, setFilterText] = useState('');
    const [leads] = useState(sampleLeads);

    const filteredLeads = leads.filter((lead) => [lead.Name, lead.Email].some(field =>
        field.toLowerCase().includes(filterText.toLowerCase())
    ));


    return (
    <Container>
        <div style={{ padding: '20px' }}>
            <Title>Leads Table</Title>
            <SearchInput type="text" placeholder="Search by name" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <StyledTable>
            <table border="1">
                <thead>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Phone</Th>
                    <Th>Status</Th>
                    <Th>Lead Source</Th>
                    <Th>Created Date</Th>
                </thead>
                <tbody>
                    {filteredLeads.map((leads, idx) => (
                        <tr key={idx}>
                            <Td>{leads.Name}</Td>
                            <Td>{leads.Email}</Td>
                            <Td>{leads.Phone}</Td>
                            <Td><StatusBadge status={leads.Status}>{leads.Status}</StatusBadge></Td>
                            <Td>{leads.LeadSource}</Td>
                            <Td>{leads.CreatedDate}</Td>

                        </tr>

                    ))}
                    {filteredLeads.length === 0 && (
                        <NoData>
                            <tr>
                            <Td colSpan="6" align="center">No leads Found</Td>
                        </tr>
                        </NoData>
                        

                    )}


                </tbody>
            </table>
        </StyledTable>
        </div>
    </Container>
    )
}

export default LeadsTable;