package com.portfolio.backend.repository;

import com.portfolio.backend.entity.Educational;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends JpaRepository<Educational, Long> {
}
