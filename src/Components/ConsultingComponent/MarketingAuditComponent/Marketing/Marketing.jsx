import AuditService from "../AuditService/AuditService";
import MarketingAudit from "../MarketingAudit";

const Marketing = () => {
    return (
        <section className="pb-20">
            <MarketingAudit></MarketingAudit>
            <AuditService></AuditService>
        </section>
    );
};

export default Marketing;