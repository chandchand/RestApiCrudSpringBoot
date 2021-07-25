package com.belajarspring.candidatapp.dao;

//ini adalah class class bisnis proses

import com.belajarspring.candidatapp.entity.Candidate;
import com.belajarspring.candidatapp.repo.CandidateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service("candidateDao")
@Transactional
public class CandidateDao {

    @Autowired
    private CandidateRepo repo;

    public Candidate insert(@RequestBody Candidate candidate){
        return repo.save(candidate);
    }

    public List<Candidate> findAll(){
        return repo.findAllCandidate();
    }

//    public List<Candidate> findById(Long id){
//        return repo.edit(id);
//    }

//    public boolean delete(Candidate candidate){
//        repo.delete(candidate);
//        return true;
//    }

    public boolean delete(Long id) {
        repo.deleteById(id);
        return true;
    }
}
